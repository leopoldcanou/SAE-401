import Button from './Button';

export default function Header() {
    return (
        <div className="relative ">
            <div className="relative inset-0 ">
                <div className="h-96 w-screen bg-[url('/img/HEADER_BG.jpg')] bg-cover bg-top"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-background via-transparent"></div>
            </div>
            <div className="relative inset-0 flex flex-col items-center justify-center text-white h-[24rem] -top-24">
                <h2 className="px-6 mb-4 text-xl font-bold text-center">Watch the latest movies without a subscription!</h2>
                <p className="px-6 text-sm text-center">Welcome to one of the Nordic countries&apos; broadest purchase and rental options. We offer everything from the latest blockbusters to narrower quality films and series. Here you only pay for what you want to see. No subscription, no monthly fee.</p>
                <Button rounded={"full"} size={"medium"} width={"10/12"}>Get started!</Button>
                <ul className="flex flex-col w-full gap-4 p-8 w">
                    <li className='flex flex-row gap-2'>
                    <svg className='w-6 h-6 min-w-6 fill-[#73AF55]'  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6.707 11.293-1.414 1.414 4.707 4.707 8.707-8.707-1.414-1.414-7.293 7.293z"></path></svg><p className="text-base font-bold font-roboto">Pay only for what you see</p>
                </li>
                <li className='flex flex-row gap-2'>
                    <svg className='w-6 h-6 min-w-6 fill-[#73AF55]'  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6.707 11.293-1.414 1.414 4.707 4.707 8.707-8.707-1.414-1.414-7.293 7.293z"></path></svg><p className="text-base font-bold font-roboto">Stream live or watch offline</p>
                </li>
                <li className='flex flex-row gap-2'>
                    <svg className='w-6 h-6 min-w-6 fill-[#73AF55]'  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6.707 11.293-1.414 1.414 4.707 4.707 8.707-8.707-1.414-1.414-7.293 7.293z"></path></svg><p className="text-base font-bold font-roboto">One of the Nordic countries&apos; widest range</p>
                </li>
                </ul>
            </div>
        </div>
    );
}  