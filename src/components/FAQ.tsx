import { Fragment, useState } from "react";
import { FAQdata } from "../data";
import FAQarrow from "../assets/icon-arrow.svg";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FAQ = () => {
	const [open, setOpen] = useState<number | null>(1);

	const handleOpen = (value: number) => {
		setOpen(open === value ? null : value);
	};

	const FAQHtml = FAQdata.map((data, index) => {
		return (
			<Accordion key={data.question} className="px-4 border-b-[1px]" open={open === index}>
				<div className="flex items-center">
					<AccordionHeader
						className="text-VeryDarkBlue text-[15px]"
						onClick={() => handleOpen(index)}>
						{data.question}
					</AccordionHeader>
					<img
						className={`${open === index && "rotate-180 hue-rotate-60"}`}
						src={FAQarrow}
						alt="Arrow"
					/>
				</div>
				<AccordionBody className="text-left text-GrayishBlue text-md">{data.answer}</AccordionBody>
			</Accordion>
		);
	});

	return (
		<div className="flex flex-col justify-center items-center text-center py-6 px-4">
			<h2 className="text-VeryDarkBlue text-2xl font-medium">Frequently Asked Questions</h2>
			<p className="text-md py-6 text-GrayishBlue ">
				Here are some of our FAQs. If you have any other questions you’d like answered please feel
				free to email us.
			</p>
			<Fragment>{FAQHtml}</Fragment>
			<button className="cursor-pointer bg-SoftBlue text-white p-4 mt-6 mb-2 rounded-lg shadow-md">
				More info
			</button>
		</div>
	);
};

export default FAQ;
