import { Metadata } from "next";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "You're In",
};

export default function ThankYouPage() {
  return (
    <div className="thank-you-page">
      <div className="thank-you-card">
        <p className="eyebrow">Registration Complete</p>
        <h1>You&apos;re in, Brother.</h1>
        <p>Check your email for your order confirmation.</p>
        <div className="thank-you-actions">
          <Button href="/schedule" variant="secondary">View the Schedule</Button>
          <Button href="/">Return Home</Button>
        </div>
      </div>
    </div>
  );
}
