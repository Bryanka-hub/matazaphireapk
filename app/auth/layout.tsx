export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-[url('/images/bgAuth.png')] bg-cover bg-center">
            {/* Kiri: Dummy putih */}
            <div className="w-1/2 hidden md:flex flex-col bg-black/80">
                <img
                    src="/icons/icLogoAuth.svg"
                    alt="Logo Auth"
                    className="w-60 h-60 mb-4 ml-10"
                    draggable={false}
                />
                <div className="mx-8">
                    <div className="flex flex-row items-center">
                        <h1 className="text-4xl font-bold text-white leading-tight mb-2">
                            Automated Web
                        </h1>
                        <span className="block flex-1 h-2 rounded-full bg-blue-500 mt-4 mb-4 ml-2" />
                    </div>
                    <h1 className="text-4xl font-bold text-blue-500 leading-tight mb-2">
                        Vulnerability Assessment
                    </h1>
                    <div className="flex flex-row items-center">
                        <h1 className="text-4xl font-bold text-white leading-tight mb-2">
                            Tool
                        </h1>
                        <span className="block flex-1 h-2 rounded-full bg-blue-500 ml-3" />
                    </div>
                </div>

                <div className="flex flex-col w-full mt-15 items-center justify-center">
                    <span>Mata Zaphire offers an automated solution based on a </span>
                    <span>scheduling system and the OWASP Risk Rating Methodology.</span>
                </div>
            </div>
            {/* Kanan: Blur + children */}
            <div className="w-full md:w-1/2 flex items-center justify-center relative">
                {/* Blur overlay cuma di kanan */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-xl z-0" />
                <div className="relative z-10 w-full max-w-lg p-8">
                    {children}
                </div>
            </div>
        </div>
    );
}