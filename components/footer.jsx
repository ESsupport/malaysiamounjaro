import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex justify-center">
        <Image
          src="/Product Logo/mounjaro-malaysia-logo-kwikpen-Tirzepatide-01.png"
          alt="Malaysia Mounjaro"
          width={400}
          height={120}
          className="h-24 w-auto"
        />
      </div>
    </footer>
  )
}
