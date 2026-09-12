import { whatsappLink } from "@/lib/site-data";

export function WhatsappFab() {
  return (
    <a
      href={whatsappLink("Olá! Gostaria de agendar uma consulta.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform [transition-timing-function:var(--ease-spring-3)] hover:scale-105"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-7"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.93 9.93 0 0 0 4.62 1.14h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.81 14.13c-.25.69-1.24 1.28-1.99 1.44-.53.11-1.22.2-3.55-.76-2.98-1.23-4.9-4.25-5.05-4.45-.15-.2-1.21-1.61-1.21-3.07s.75-2.18 1.02-2.48c.25-.28.55-.35.73-.35h.53c.17 0 .4-.06.63.48.25.6.85 2.06.92 2.21.07.15.12.33.02.53-.09.2-.14.32-.28.49-.14.17-.29.37-.42.5-.14.14-.28.28-.12.55.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.2.68-.79.87-1.06.18-.28.36-.23.6-.14.25.09 1.57.74 1.84.88.27.14.45.2.51.32.07.11.07.66-.18 1.35Z" />
      </svg>
    </a>
  );
}
