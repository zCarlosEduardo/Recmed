import Image from "next/image";
import m3 from "../assets/img/logo-removebg-preview.png";
import { Baloo_2 } from "next/font/google";

const baloo_2 = Baloo_2({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: [ "400", "500", "600", "700"],
  style: ['normal'],
  display: 'swap',
});


export default function HomeSection() {
  return (
    <article className="bg-slate-300 w-screen h-screen p-10 max-md:px-4 text-zinc-900 flex justify-around items-center">
      <div className="flex flex-col max-sm:text-center max-sm:justify-center">
        <span className="text-xl font-semibold">Bem-vindo à</span>
        <h1 className="text-8xl font-bold text-blue-950" style={baloo_2.style}>recmed</h1>
        <p className="max-w-xl my-5 text-zinc-800 text-lg">
          Com anos de experiência no setor, nossa missão é fornecer medicamentos
          de alta qualidade e um atendimento excepcional. Trabalhamos com
          compromisso e integridade para garantir que nossos clientes tenham
          acesso às soluções de saúde que precisam, quando precisam.
        </p>
        <div className=" mt-6">
          <a
            href="#"
            className="bg-blue-600 p-3 rounded-md text-lg text-white font-semibold hover:bg-blue-800 transition-colors"
          >
            Faça seu orçamento
          </a>
        </div>
      </div>
      <div className="max-lg:hidden">
      <Image
                src={m3}
                alt="Logo da marca: 3M"
                width={500}
                height={300}
              />
      </div>
    </article>
  );
}
