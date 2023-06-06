import { CountDown } from "../components/CountDown"

export const Landing: React.FC = () => {
    return (
        <div className="h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 pt-72">
            <CountDown />

            <div className="flex justify-center items-center mt-10 font-mono text-xl">Edinburgh Half Marathon 2023</div>
        </div>
    )
}