import React from 'react'

const MagicButton = ({title}: {title:string}) => {
	return (
		<button className="shadow-[inset_0_0_0_2px_#282424] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#282424] hover:text-white dark:text-transparent dark:shadow-[inset_0_0_0_2px_#FFF] dark:hover:bg-[#FFF] dark:hover:text-black-100 dark:text-white transition duration-200">
			{title}
		</button>
	)
}

export default MagicButton
