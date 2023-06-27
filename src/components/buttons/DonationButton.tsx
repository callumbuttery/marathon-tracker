export const DonationButton: React.FC = () => {
    return (
        <div>
            <button onClick={() => window.open('https://www.justgiving.com/page/callum-buttery-1686254435318?utm_source=copyLink&utm_medium=one_page&utm_content=page/callum-buttery-1686254435318&utm_campaign=pfp-share&utm_term=9e800a73878d42298fd8d468b21fbeda', "_blank")} type="button" className="shadow-4xl text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 animate-bounce max-md:text-xs max-md:w-16 max-md:h-12">Donate!</button>
        </div>
    )
}