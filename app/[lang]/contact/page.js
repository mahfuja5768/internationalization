import { getDictionary } from "../dictionaries/dictionaries";

export default async function Contact({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return <div>{dict.contact}</div>;
}
