import Image from "next/image";

export default function Calculos() {
    return (
        <div className="flex gap-5 flex-col">
            <div className="flex flex-col gap-2 bg-gray-100 p-4 rounded shadow">
                <h1 className="text-5xl">Trajetórias Planetárias:</h1>
                <p className="text-2xl">Velikovsky tenta calcular as órbitas de Vênus e Marte, argumentando que suas passagens próximas à Terra causaram eventos cataclísmicos. Ele propõe que esses planetas não seguiram suas órbitas atuais, mas passaram por um processo de mudança dramática.</p>
                <h2 className="text-4xl">Cálculo:</h2>
                <p className="text-2xl">T2 = K. R3</p>
                <figure>
                    <Image
                        src="/img/Trajetoria.jpg"
                        width={500}
                        height={500}
                        alt=" exemplo de Trajetória"
                    />
                </figure>
            </div>
            <div className="flex flex-col gap-2 bg-gray-100 p-4 rounded shadow">
                <h1 className="text-5xl">Forças Gravitacionais:</h1>
                <p className="text-2xl">Ele discute os efeitos da gravidade nas interações entre os planetas e a Terra, sugerindo que a atração gravitacional poderia ter causado catástrofes, como inundações e terremotos.</p>
                <h2 className="text-4xl">Cálculo:</h2>
                <p className="text-2xl">F = G (m1 * m2) / r²</p>
                <figure>
                    <Image
                        src="/img/ForcGravitacional.webp"
                        width={500}
                        height={500}
                        alt=" exemplo de Força Gravitacional"
                    />
                </figure>
            </div>
            <div className="flex flex-col gap-2 bg-gray-100 p-4 rounded shadow">
                <h1 className="text-5xl">Mitologia e Cronologia:</h1>
                <p className="text-2xl">Velikovsky relaciona eventos mitológicos a fenômenos astronômicos, tentando calcular datas para eventos históricos significativos, como as pragas do Egito ou a queda de civilizações.</p>
                <h2 className="text-4xl">Cálculo:</h2>
                <p className="text-2xl">T=k⋅a3</p>
                <figure>
                    <Image
                        src="/img/PragasDoEgito.png"
                        width={500}
                        height={500}
                        alt="Pragas do Egito"
                    />
                </figure>
            </div>
            <div className="flex flex-col gap-2 bg-gray-100 p-4 rounded shadow">
                <h1 className="text-5xl">Mudanças Climáticas:</h1>
                <p className="text-2xl">Ele sugere que as interações planetárias poderiam ter causado mudanças climáticas drásticas, influenciando a história humana.</p>
                <h2 className="text-4xl">Cálculo:</h2>
                <p className="text-2xl">ΔT = ∑ (ΔT_i)</p>
                <Image
                        src="/img/VariacaoTemp.png"
                        width={500}
                        height={500}
                        alt="Variação de Temperatura"
                    />
            </div>
        </div>
    );
}

