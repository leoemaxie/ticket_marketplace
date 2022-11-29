import CategorySlider from "./CategorySlider"
import { EventContext } from "../contexts/eventContext"
import { useContext } from "react"

const Category = () => {
    const { category, filterByCategory } = useContext(EventContext)
    console.log(category)
    return (
        <div className='py-14 px-8 md:px-12 lg:p-20 bg-gradient-to-tr from-darkPurple to-purple -mt-1'>
            <div className="text-white max-w-8xl m-auto ">
                <hr className="text-lightGray" />
                <p className="text-2xl py-3">Popular search</p>
                <div className="mb-6 flex items-center">
                    <button className={`${category === 'all' ? 'bg-blue' : ''} bg-inherit border-[1px] border-blue py-2 px-4 rounded-3xl font-semibold mr-12`} onClick={() => filterByCategory('all')}>All</button>
                    <button className={`${category === 'game' ? 'bg-blue' : ''} bg-inherit border-[1px] border-blue mr-12 py-2 px-4 rounded-3xl font-semibold`} onClick={() => filterByCategory('game')}>Game</button>
                    {/* <button className='bg-inherit border-[1px] border-blue mr-12 py-2 px-4 rounded-3xl font-semibold'>Metaverse</button> */}
                </div>
                <hr className="text-lightGray" />
                <div className='mt-8 '>
                    <CategorySlider />
                </div>
            </div>

        </div>
    )
}

export default Category