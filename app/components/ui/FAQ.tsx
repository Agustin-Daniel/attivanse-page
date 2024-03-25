"use server"
import clsx from 'clsx';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./Accordion";
import { worksans } from './fonts';
import MotionDiv from './motion/MotionDiv';



export const FAQ = () => {
	const questions = [
		{
			title: "Ya tengo un sitio web ¿Pueden remplazarlo?",
			content:
				"Si, podemos remplazarlo, y es muy sensillo! Siempre y cuando el sitio web sea de su propiedad y tenga acceso a el. Si no es así, podemos ayudarlo a crear uno nuevo.",
		},
		{
			title: "¿Cuanto tiempo tarda en estar listo mi sitio web?",
			content:
				"El tiempo de desarrollo de un sitio web depende de la complejidad del mismo. En promedio, un sitio web puede estar listo en 4 semanas. Pero si el sitio web es muy complejo, puede tardar hasta 3 meses.",
		},
		{
			title: "¿Puedo hacer cambios en mi sitio web?",
			content:
				"Si, puede hacer cambios en su sitio web. Pero si no tiene conocimientos de programación, le recomendamos que se comunique con nosotros y haremos los cambios por usted!",
		},
		{
			title: "¿Puedo agregar una tienda online a mi sitio web?",
			content:
				"Claro que si! Podemos crearle una tienda oline a medida exclusiva para su empresa. Y si ya tiene una tienda online, podemos integrarla a su sitio web.",
		},
		{
			title: "¿Cuánto apoyo recibo?",
			content:
				"Recibirá soporte técnico ilimitado! Siempre que necesite ayuda, puede comunicarse con nosotros por mail y lo ayudaremos con cualquier problema que tenga.",
		},
	];

	return (
		<section id='FAQ' className="bg-black py-12 px-5 flex flex-col items-center lg:pt-20 lg:pb-24 lg:px-48">
			<h2>Respuestas a las preguntas importantes.</h2>
			<Accordion className="flex flex-col gap-8 lg:gap-7 mt-10 w-full max-w-[880px] lg:mt-14" type="single" collapsible>
        {
          questions.map((question, index) => (
			<MotionDiv
				key={index + question.title}
				custom={index}
				viewport={{ once: true }}
			>
				<AccordionItem className="border-[1px] rounded-lg border-[#EDF7F7]" value={`item-${index}`}>
				<AccordionTrigger  className="text-base text-left hover:no-underline px-6 py-4 lg:px-8 lg:py-6 lg:text-lg lg:leading-normal">
					{question.title}
				</AccordionTrigger>
				<AccordionContent className={clsx(worksans.className, "text-base text-coldgray px-6 pb-4 lg:pb-7 lg:px-8")}>
					{question.content}
				</AccordionContent>
				</AccordionItem>
			</MotionDiv>
          ))
        }
			</Accordion>
		</section>
	);
};
