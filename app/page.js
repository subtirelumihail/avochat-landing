
import styles from "./page.module.css";
import Main from "@/components/main";
import ContentCF from "@/components/contentCF";
import ContentSES from "@/components/contentSES";
import Parteneri from "@/components/parteneri";
import IntrebariF from "@/components/intrebariF";
import SocietatiP from "@/components/societatiP";
import Solutii from "@/components/solutii";

export default function Home() {
  return (
    <>
    <Main />
    <ContentCF />
    <ContentSES />
    <Parteneri />
    <IntrebariF />
    <SocietatiP />
    <Solutii />
    </>
  );
}
