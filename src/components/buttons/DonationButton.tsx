export const DonationButton: React.FC = () => {
    return (
        <div>
            <button onClick={() => window.open('https://www.justgiving.com/page/callum-buttery-1686254435318?utm_source=copyLink&utm_medium=one_page&utm_content=page/callum-buttery-1686254435318&utm_campaign=pfp-share&utm_term=9e800a73878d42298fd8d468b21fbeda', "_blank")} type="button" className="animate-bounce shadow-4xl text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Donate!</button>
        </div>
    )
}