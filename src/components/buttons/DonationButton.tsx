export const DonationButton: React.FC = () => {
    return (
        <div>
            <button onClick={() => window.open('https://www.justgiving.com/fundraising/half-marathon-chrisshouse', "_blank")} type="button" className="animate-bounce shadow-4xl text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Donate!</button>
        </div>
    )
}