"use client";

import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Trash2,
  ChevronLeft,
  MessageCircle,
  CreditCard,
  CheckCircle,
  ShoppingBag,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { CartContext } from "../../context/cartContext";

// ─── Helpers ────────────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = "2348137742724";

const buildWhatsAppMessage = (cart, total, form, formatPrice) => {
  const itemLines = cart
    .map(
      (item, i) =>
        `  ${i + 1}. ${item.name} (${item.category}) — ${formatPrice(item.price)}`,
    )
    .join("\n");

  const message =
    `Hello Glams Wardrobe!\n\n` +
    `I'd like to place an order:\n\n` +
    `*Items:*\n${itemLines}\n\n` +
    `*Order Total:* ${formatPrice(total)}\n\n` +
    `*My Details:*\n` +
    `Name: ${form.name}\n` +
    `Email: ${form.email}\n` +
    `Phone: ${form.phone}\n` +
    `Address: ${form.address}, ${form.city}${form.state ? ", " + form.state : ""}\n\n` +
    `Please confirm availability and next steps. Thank you! 🙏`;

  return encodeURIComponent(message);
};

// ─── Sub-components ──────────────────────────────────────────────────────────

const SectionEyebrow = ({ children }) => (
  <span className="font-poppins text-glams-gold text-[10px] uppercase tracking-[0.3em] flex items-center gap-3 mb-2">
    <span className="inline-block w-5 h-px bg-glams-gold shrink-0" />
    {children}
  </span>
);

const InputField = ({ label, id, error, ...props }) => (
  <div className="flex flex-col gap-1.5">
    <label
      htmlFor={id}
      className="font-poppins text-xs text-glams-charcoal/60 uppercase tracking-widest"
    >
      {label}
    </label>
    <input
      id={id}
      {...props}
      className={`w-full border-b ${
        error ? "border-glams-pink" : "border-glams-charcoal/20"
      } bg-transparent font-poppins text-sm text-glams-charcoal py-2 outline-none focus:border-glams-charcoal placeholder-glams-charcoal/30 transition-colors duration-200`}
    />
    {error && (
      <span className="font-poppins text-[11px] text-glams-pink">{error}</span>
    )}
  </div>
);

// ─── Main Page ───────────────────────────────────────────────────────────────

const STEPS = ["Details", "Payment"];

export default function CheckoutPage() {
  const { cart, setCart, total, removeFromCart, formatPrice } =
    useContext(CartContext);

  const [step, setStep] = useState(0); // 0 = details, 1 = payment
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    note: "",
  });
  const [errors, setErrors] = useState({});
  const [payMethod, setPayMethod] = useState(null); // 'whatsapp' | 'paystack'
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false); // mobile order summary toggle

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validateDetails = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "A valid email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.address.trim())
      newErrors.address = "Delivery address is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    return newErrors;
  };

  const handleNextStep = () => {
    const errs = validateDetails();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    const msg = buildWhatsAppMessage(cart, total, form, formatPrice);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setOrderPlaced(true);
    setCart([]);
  };

  const handlePaystack = () => {
    // In production: initialise Paystack inline or redirect to payment link
    alert("Demo mode: Paystack integration for paymnets in production.");
    setOrderPlaced(true);
    setCart([]);
  };

  const itemCount = cart.length;

  // ── Empty cart ──
  if (itemCount === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-glams-butter flex flex-col items-center justify-center gap-6 px-4 text-center pt-24">
        <ShoppingBag
          className="w-16 h-16 text-glams-charcoal/20"
          strokeWidth={1}
        />
        <h2 className="font-playfair text-3xl font-bold text-glams-charcoal">
          Your bag is empty
        </h2>
        <p className="font-poppins text-glams-charcoal/60 text-sm max-w-xs">
          Add some pieces to your bag before heading to checkout.
        </p>
        <Link
          href="/"
          className="mt-2 bg-glams-charcoal text-white font-poppins text-xs font-bold uppercase tracking-widest px-8 py-3 hover:bg-glams-pink transition-colors duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  // ── Order confirmed ──
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-glams-butter flex flex-col items-center justify-center gap-6 px-4 text-center pt-24">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        >
          <CheckCircle
            className="w-20 h-20 text-glams-pink mx-auto"
            strokeWidth={1.2}
          />
        </motion.div>
        <h2 className="font-playfair text-4xl font-bold text-glams-charcoal">
          Order received!
        </h2>
        <p className="font-poppins text-glams-charcoal/60 text-sm max-w-sm leading-relaxed">
          Thank you, {form.name.split(" ")[0]}. Your order details have been
          submitted. We&apos;ll be in touch soon to confirm your pieces.
        </p>
        <Link
          href="/"
          className="mt-2 bg-glams-charcoal text-white font-poppins text-xs font-bold uppercase tracking-widest px-8 py-3 hover:bg-glams-pink transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  // ─── Main checkout layout ────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-glams-butter">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5 px-5 sm:px-10 lg:px-20 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-great-vibes text-glams-pink text-2xl leading-none"
        >
          Glams Wardrobe
        </Link>
        {/* Step pills */}
        <div className="flex items-center gap-3">
          {STEPS.map((s, i) => (
            <React.Fragment key={s}>
              <span
                className={`font-poppins text-xs uppercase tracking-widest transition-colors duration-300 ${
                  i === step
                    ? "text-glams-charcoal font-semibold"
                    : i < step
                      ? "text-glams-pink"
                      : "text-glams-charcoal/30"
                }`}
              >
                {s}
              </span>
              {i < STEPS.length - 1 && (
                <span className="w-6 h-px bg-glams-charcoal/20" />
              )}
            </React.Fragment>
          ))}
        </div>
        <Link
          href="/"
          className="flex items-center gap-1.5 font-poppins text-xs text-glams-charcoal/50 hover:text-glams-charcoal transition-colors duration-200"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Shop
        </Link>
      </div>

      {/* Page body */}
      <div className="pt-24 pb-20 px-4 sm:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-start">
          {/* ── LEFT: Form panel ─────────────────────────────────────────── */}
          <div className="w-full lg:w-[55%] xl:w-[58%]">
            {/* Page heading */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <SectionEyebrow>Secure Checkout</SectionEyebrow>
              <h1 className="font-playfair font-bold text-[clamp(2rem,4vw,3rem)] text-glams-charcoal leading-tight">
                {step === 0 ? (
                  <>
                    Your <span className="text-glams-pink italic">Details</span>
                  </>
                ) : (
                  <>
                    Choose{" "}
                    <span className="text-glams-pink italic">Payment</span>
                  </>
                )}
              </h1>
            </motion.div>

            {/* ── Mobile order summary toggle ── */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setSummaryOpen((o) => !o)}
                className="w-full flex items-center justify-between bg-white border border-glams-charcoal/10 rounded-xl px-5 py-4"
              >
                <span className="font-poppins text-sm font-semibold text-glams-charcoal flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-glams-pink" />
                  Order summary — {itemCount}{" "}
                  {itemCount === 1 ? "item" : "items"}
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-poppins text-sm font-bold text-glams-pink">
                    {formatPrice(total)}
                  </span>
                  {summaryOpen ? (
                    <ChevronUp className="w-4 h-4 text-glams-charcoal/50" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-glams-charcoal/50" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {summaryOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <OrderSummaryContent
                      cart={cart}
                      total={total}
                      formatPrice={formatPrice}
                      removeFromCart={removeFromCart}
                      compact
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── STEP 0: Customer Details ── */}
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-8"
                >
                  {/* Contact */}
                  <fieldset className="flex flex-col gap-5">
                    <legend className="font-playfair text-lg font-bold text-glams-charcoal mb-4">
                      Contact Information
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InputField
                        label="Full Name"
                        id="name"
                        name="name"
                        placeholder="Ada Obi"
                        value={form.name}
                        onChange={handleChange}
                        error={errors.name}
                      />
                      <InputField
                        label="Email Address"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="hello@example.com"
                        value={form.email}
                        onChange={handleChange}
                        error={errors.email}
                      />
                    </div>
                    <InputField
                      label="Phone Number"
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={form.phone}
                      onChange={handleChange}
                      error={errors.phone}
                    />
                  </fieldset>

                  {/* Delivery */}
                  <fieldset className="flex flex-col gap-5">
                    <legend className="font-playfair text-lg font-bold text-glams-charcoal mb-4">
                      Delivery Address
                    </legend>
                    <InputField
                      label="Street Address"
                      id="address"
                      name="address"
                      placeholder="12 Bourdillon Road, Ikoyi"
                      value={form.address}
                      onChange={handleChange}
                      error={errors.address}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InputField
                        label="City"
                        id="city"
                        name="city"
                        placeholder="Lagos"
                        value={form.city}
                        onChange={handleChange}
                        error={errors.city}
                      />
                      <InputField
                        label="State (optional)"
                        id="state"
                        name="state"
                        placeholder="Lagos State"
                        value={form.state}
                        onChange={handleChange}
                      />
                    </div>
                  </fieldset>

                  {/* Order note */}
                  <fieldset>
                    <legend className="font-playfair text-lg font-bold text-glams-charcoal mb-4">
                      Order Note{" "}
                      <span className="font-poppins text-sm font-normal text-glams-charcoal/40">
                        (optional)
                      </span>
                    </legend>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="note"
                        className="font-poppins text-xs text-glams-charcoal/60 uppercase tracking-widest"
                      >
                        Special instructions, size notes, etc.
                      </label>
                      <textarea
                        id="note"
                        name="note"
                        rows={3}
                        placeholder="e.g. Please make in a size 12 with the green colorway."
                        value={form.note}
                        onChange={handleChange}
                        className="w-full border-b border-glams-charcoal/20 bg-transparent font-poppins text-sm text-glams-charcoal py-2 outline-none focus:border-glams-charcoal placeholder-glams-charcoal/30 resize-none transition-colors duration-200"
                      />
                    </div>
                  </fieldset>

                  <button
                    onClick={handleNextStep}
                    className="relative overflow-hidden self-start bg-glams-charcoal text-white font-poppins text-xs font-bold uppercase tracking-widest px-10 py-4 group transition-all duration-300 hover:shadow-lg"
                  >
                    <span className="absolute inset-0 bg-glams-pink translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                    <span className="relative z-10">Continue to Payment →</span>
                  </button>
                </motion.div>
              )}

              {/* ── STEP 1: Payment ── */}
              {step === 1 && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6"
                >
                  {/* Customer summary recap */}
                  <div className="bg-white border border-glams-charcoal/8 rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <p className="font-poppins text-xs text-glams-charcoal/50 uppercase tracking-widest mb-1">
                        Delivering to
                      </p>
                      <p className="font-poppins text-sm text-glams-charcoal">
                        {form.name} — {form.address}, {form.city}
                      </p>
                      <p className="font-poppins text-xs text-glams-charcoal/50 mt-0.5">
                        {form.email} · {form.phone}
                      </p>
                    </div>
                    <button
                      onClick={() => setStep(0)}
                      className="font-poppins text-xs text-glams-pink underline underline-offset-2 shrink-0"
                    >
                      Edit
                    </button>
                  </div>

                  {/* Payment options */}
                  <p className="font-playfair text-lg font-bold text-glams-charcoal">
                    How would you like to pay?
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* WhatsApp option */}
                    <button
                      onClick={() => setPayMethod("whatsapp")}
                      className={`relative group text-left border-2 rounded-2xl px-6 py-6 transition-all duration-300 ${
                        payMethod === "whatsapp"
                          ? "border-[#25D366] bg-[#25D366]/5"
                          : "border-glams-charcoal/10 bg-white hover:border-[#25D366]/60"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                          <MessageCircle className="w-5 h-5 text-[#25D366]" />
                        </div>
                        <div>
                          <p className="font-playfair font-bold text-glams-charcoal text-base mb-1">
                            Order via WhatsApp
                          </p>
                          <p className="font-poppins text-xs text-glams-charcoal/55 leading-relaxed">
                            Send your order directly to our team. We&apos;ll
                            confirm availability and process your order
                            personally.
                          </p>
                        </div>
                      </div>
                      {payMethod === "whatsapp" && (
                        <motion.div
                          layoutId="paycheck"
                          className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-white" />
                        </motion.div>
                      )}
                    </button>

                    {/* Paystack option */}
                    <button
                      onClick={() => setPayMethod("paystack")}
                      className={`relative group text-left border-2 rounded-2xl px-6 py-6 transition-all duration-300 ${
                        payMethod === "paystack"
                          ? "border-glams-pink bg-glams-pink/5"
                          : "border-glams-charcoal/10 bg-white hover:border-glams-pink/60"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-glams-pink/10 flex items-center justify-center shrink-0">
                          <CreditCard className="w-5 h-5 text-glams-pink" />
                        </div>
                        <div>
                          <p className="font-playfair font-bold text-glams-charcoal text-base mb-1">
                            Pay with Paystack
                          </p>
                          <p className="font-poppins text-xs text-glams-charcoal/55 leading-relaxed">
                            Secure card payment via Paystack. Supports Visa,
                            Mastercard, Verve, and bank transfer.
                          </p>
                        </div>
                      </div>
                      {payMethod === "paystack" && (
                        <motion.div
                          layoutId="paycheck"
                          className="absolute top-3 right-3 w-5 h-5 rounded-full bg-glams-pink flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-white" />
                        </motion.div>
                      )}
                    </button>
                  </div>

                  {/* Confirm CTA — changes based on selected method */}
                  <AnimatePresence>
                    {payMethod && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-2"
                      >
                        {payMethod === "whatsapp" ? (
                          <button
                            onClick={handleWhatsApp}
                            className="flex items-center gap-3 bg-[#25D366] text-white font-poppins text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#1fba58] transition-colors duration-300 shadow-[0_8px_24px_rgba(37,211,102,0.3)]"
                          >
                            <MessageCircle className="w-4 h-4" />
                            Send Order on WhatsApp
                          </button>
                        ) : (
                          <button
                            onClick={handlePaystack}
                            className="flex items-center gap-3 bg-glams-pink text-white font-poppins text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-glams-charcoal transition-colors duration-300 shadow-[0_8px_24px_rgba(233,30,99,0.3)]"
                          >
                            <CreditCard className="w-4 h-4" />
                            Pay {formatPrice(total)} with Paystack
                          </button>
                        )}
                        <button
                          onClick={() => setStep(0)}
                          className="font-poppins text-xs text-glams-charcoal/50 hover:text-glams-charcoal flex items-center gap-1 transition-colors duration-200"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                          Back to details
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Trust note */}
                  <p className="font-poppins text-[11px] text-glams-charcoal/35 leading-relaxed max-w-sm">
                    🔒 Your information is only used to process your order. We
                    never share your data with third parties.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── RIGHT: Order Summary (desktop) ────────────────────────────── */}
          <aside className="hidden lg:block w-full lg:w-[45%] xl:w-[42%] sticky top-24 self-start">
            <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_40px_-8px_rgba(0,0,0,0.08)]">
              <div className="px-7 pt-7 pb-5 border-b border-glams-charcoal/6">
                <SectionEyebrow>Your Selection</SectionEyebrow>
                <h2 className="font-playfair text-2xl font-bold text-glams-charcoal">
                  Order Summary
                </h2>
              </div>
              <OrderSummaryContent
                cart={cart}
                total={total}
                formatPrice={formatPrice}
                removeFromCart={removeFromCart}
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

// ─── Order Summary Content (shared between desktop sidebar & mobile drawer) ──

function OrderSummaryContent({
  cart,
  total,
  formatPrice,
  removeFromCart,
  compact,
}) {
  const shipping = 0; // free shipping for demo

  return (
    <div
      className={
        compact
          ? "bg-white border-x border-b border-glams-charcoal/10 rounded-b-xl px-5 pb-5"
          : "px-7 pb-7"
      }
    >
      {/* Items list */}
      <ul
        className={`flex flex-col divide-y divide-glams-charcoal/5 ${compact ? "mt-3" : "mt-5"}`}
      >
        {cart.map((item) => (
          <li key={item.id} className="flex items-center gap-4 py-4">
            {/* Thumbnail */}
            <div className="relative w-16 h-20 rounded-xl overflow-hidden shrink-0 bg-glams-blush">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover object-center"
              />
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="font-poppins text-xs uppercase tracking-widest text-glams-charcoal/40 mb-0.5">
                {item.category}
              </p>
              <p className="font-poppins text-sm text-glams-charcoal font-medium truncate">
                {item.name}
              </p>
              <p className="font-poppins text-sm text-glams-pink font-bold mt-1">
                {formatPrice(item.price)}
              </p>
            </div>
            {/* Remove */}
            <button
              onClick={() => removeFromCart(item)}
              className="shrink-0 p-1.5 rounded-full hover:bg-glams-pink/10 transition-colors duration-200 group"
              aria-label="Remove item"
            >
              <Trash2 className="w-4 h-4 text-glams-charcoal/30 group-hover:text-glams-pink transition-colors duration-200" />
            </button>
          </li>
        ))}
      </ul>

      {/* Totals */}
      <div className="flex flex-col gap-2.5 mt-2 pt-4 border-t border-glams-charcoal/6">
        <div className="flex justify-between">
          <span className="font-poppins text-xs text-glams-charcoal/50 uppercase tracking-widest">
            Subtotal
          </span>
          <span className="font-poppins text-sm text-glams-charcoal">
            {formatPrice(total)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-poppins text-xs text-glams-charcoal/50 uppercase tracking-widest">
            Shipping
          </span>
          <span className="font-poppins text-sm text-glams-charcoal">
            {shipping === 0
              ? "Calculated at confirmation"
              : formatPrice(shipping)}
          </span>
        </div>
        <div className="flex justify-between mt-2 pt-4 border-t border-glams-charcoal/6">
          <span className="font-poppins text-xs font-semibold text-glams-charcoal uppercase tracking-widest">
            Total
          </span>
          <span className="font-playfair text-xl font-bold text-glams-pink">
            {formatPrice(total)}
          </span>
        </div>
      </div>

      {/* Brand note */}
      <p className="font-poppins text-[10px] text-glams-charcoal/30 mt-5 leading-relaxed">
        All pieces are handcrafted in Lagos. Delivery timelines will be
        confirmed after your order is received.
      </p>
    </div>
  );
}
