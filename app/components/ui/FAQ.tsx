import clsx from 'clsx';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./Accordion";
import { worksans } from './fonts';



export const FAQ = () => {
	const questions = [
		{
			title: "Lörem ipsum trollfilter katt nynade abumill. Timellare?",
			content:
				"Lörem ipsum sper passivhus reasåsam hyn. Tirad. Dekande makrorade. Geongen id-sprej i studsmattesjuka. Curla miprepönde did, i deciska, sagt. Lörem ipsum sper passivhus reasåsam hyn. Tirad. Dekande makrorade. ",
		},
		{
			title: "Lörem ipsum trollfilter katt nynade abumill. Timellare?",
			content:
				"Lörem ipsum sper passivhus reasåsam hyn. Tirad. Dekande makrorade. Geongen id-sprej i studsmattesjuka. Curla miprepönde did, i deciska, sagt. Lörem ipsum sper passivhus reasåsam hyn. Tirad. Dekande makrorade. ",
		},
		{
			title: "Lörem ipsum trollfilter katt nynade abumill. Timellare?",
			content:
				"Lörem ipsum sper passivhus reasåsam hyn. Tirad. Dekande makrorade. Geongen id-sprej i studsmattesjuka. Curla miprepönde did, i deciska, sagt. Lörem ipsum sper passivhus reasåsam hyn. Tirad. Dekande makrorade. ",
		},
		{
			title: "Lörem ipsum trollfilter katt nynade abumill. Timellare?",
			content:
				"Lörem ipsum sper passivhus reasåsam hyn. Tirad. Dekande makrorade. Geongen id-sprej i studsmattesjuka. Curla miprepönde did, i deciska, sagt. Lörem ipsum sper passivhus reasåsam hyn. Tirad. Dekande makrorade. ",
		},
		{
			title: "Lörem ipsum trollfilter katt nynade abumill. Timellare?",
			content:
				"Lörem ipsum sper passivhus reasåsam hyn. Tirad. Dekande makrorade. Geongen id-sprej i studsmattesjuka. Curla miprepönde did, i deciska, sagt. Lörem ipsum sper passivhus reasåsam hyn. Tirad. Dekande makrorade. ",
		},
	];

	return (
		<div className="bg-black py-12 px-5 flex flex-col items-center">
			<h2>Preguntas frecuentes</h2>
			<Accordion className="flex flex-col gap-8 lg:gap-7 mt-10 w-full max-w-[880px] lg:mt-14" type="single" collapsible>
        {
          questions.map((question, index) => (
            <AccordionItem className="border-[1px] rounded-lg border-[#EDF7F7]" key={index} value={`item-${index}`}>
              <AccordionTrigger  className="text-base text-left hover:no-underline px-6 py-4 lg:px-8 lg:py-6 lg:text-lg lg:leading-normal">
                {question.title}
              </AccordionTrigger>
              <AccordionContent className={clsx(worksans.className, "text-base text-coldgray px-6 pb-4 lg:pb-7 lg:px-8")}>
                {question.content}
              </AccordionContent>
            </AccordionItem>
          ))
        }
			</Accordion>
		</div>
	);
};