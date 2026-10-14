export const contact = {
  name: "Ana Lucia Porto",
  telephone: "+558396130421",
  phoneDisplay: "(83) 9613-0421",
  whatsappUrl: "https://wa.me/558396130421",
  instagram: "https://www.instagram.com/_analuciaporto/",
  tiktok: "https://www.tiktok.com/@ana.porto221",
} as const;

// Centraliza o contato e codifica a mensagem para preservar espaços e acentos.
export function whatsappLink(message: string): string {
  return `${contact.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export const onlineCourse = {
  checkoutUrl: "https://pay.kiwify.com.br/TVxs1tl",
} as const;
