import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { clinic, navLinks } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold text-primary">
            {clinic.fullName}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {clinic.doctor.name}, {clinic.doctor.crm}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            {clinic.tagline}.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Contato</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>{clinic.address.line1}</li>
            <li>{clinic.address.line2}</li>
            <li>{clinic.address.cep}</li>
            <li className="pt-1">{clinic.phoneDisplay} (WhatsApp)</li>
            <li>{clinic.email}</li>
            <li>
              <a
                href={clinic.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                {clinic.instagram}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Horário</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {clinic.hours.map((h) => (
              <li key={h.day}>
                {h.day}: {h.time}
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm font-semibold text-foreground">
            Navegação
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator />

      <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted-foreground sm:px-6">
        <p>
          © {year} {clinic.fullName}. {clinic.doctor.name},{" "}
          {clinic.doctor.crm}.
        </p>
      </div>
    </footer>
  );
}
