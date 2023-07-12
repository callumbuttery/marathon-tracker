export const ViewEventButton: React.FC = () => {
    return (
        <div>
            <button onClick={() => window.open('https://www.scottishhalfmarathon.com/half', "_blank")} type="button" className="shadow-4xl text-white text-center bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 max-md:text-xs max-md:w-24 max-md:h-12">View Event!</button>
        </div>
    )
}