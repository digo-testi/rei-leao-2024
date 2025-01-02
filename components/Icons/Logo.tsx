import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/logo.png" // Substitua pelo caminho da sua imagem
      alt="2025 logo"
      width={300} // Ajuste para o tamanho desejado
      height={50} // Ajuste para o tamanho desejado
      priority // Adiciona prioridade para carregamento
    />
  );
}
