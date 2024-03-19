import Button from './Button';

export default function Header() {
    return (
        <div className="relative ">
            <div className="relative inset-0 ">
                <div className="h-96 w-screen bg-[url('/src/assets/HEADER_BG.jpg')] bg-cover bg-top"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-background via-transparent"></div>
            </div>
            <div className="relative inset-0 flex flex-col items-center justify-center text-white h-[24rem] -top-24">
                <h2 className="px-6 mb-4 text-xl font-bold text-center">Regardez les derniers films sans abonnement !</h2>
                <p className="px-6 text-sm text-center">Bienvenue dans l&apos;une des options d&apos;achat et de location les plus étendues des pays nordiques. Nous proposons de tout, des derniers blockbusters aux films et séries de qualité plus restreinte. Ici, vous ne payez que ce que vous voulez voir. Pas d&apos;abonnement, pas de frais mensuels.</p>
                <Button rounded={"full"} size={"medium"} width={"10/12"}>Commencer !</Button>
                <ul><li></li></ul>
            </div>
        </div>
    );
}
