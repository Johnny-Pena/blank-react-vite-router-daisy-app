import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-base-300 text-base-content p-8 sm:p-10"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="flex gap-3 justify-center">
        <div className="mt-auto text-sm text-muted text-center">
          <p>&copy; {new Date().getFullYear()} Johnny Peña. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}