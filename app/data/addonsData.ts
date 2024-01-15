
interface ListItem {
    title: string;
    description: string;
}

interface AddonData {
    title: string;
    description: string;
    image: string;
    slug: string;
    reviews: string;
    list: ListItem[];
    price: number | string;
    monthly: boolean;
}

export const addonsData:AddonData[] = [
    {
        title: "Smart Assist",
        description: "Soporte técnico 24/7 para tu sitio web. Nuestro equipo de expertos está listo para ayudarte con cualquier problema que tengas con tu sitio web.",
        image: "/img/addons/addon-smart.png",
        slug: "smart-assist",
        reviews: "72",
        list: [
            { title: "Soporte Premium", description: "Cada mes puede utilizar 3 horas de soporte premium para actualizaciones generales del sitio" },
            { title: "Descuentos en el mercado", description: "Reciba un 15% de descuento en todos los addons disponibles en la tienda!" },
            { title: "Servicio Prioritario", description: "¿quieres realizar un cambio de ultima hora? Tanquilo, tendras la prioridad que te mereces." },
        ],
        price: "$25",
        monthly: true

    },
    {
        title: "Logo Design & Branding Guide",
        description: "¿Listo para una cambio? Nuestro equipo de diseñadores gráficos creará un branding profesional para su empresa./n/nUna marca fuerte es la clave para el éxito de cualquier empresa, es lo primero que ven tus clientes potenciales y es lo que los hace decidir si confiar en ti o no./n/n¡Aqui estamos para ayudarte!",
        image: "/img/addons/addon-branding.png",
        slug: "branding-guide",
        reviews: "57",
        list: [
            { title: "Diseñado Profecional", description: "Solamente profecionales especializados se encarganar del diseño de tu logo o marca." },
            { title: "Opciones", description: "Se le presentaran varias variantes para elegir durante el proceso de generacion." },
            { title: "Revisiones", description: "En todo momento se le preguntara si esta de acurdo con el progeso o si desea modificar algo." },
        ],
        price: "$1100 Branding / $600 Logo",
        monthly: false

    },
    {
        title: "Click Maps",
        description: "Lo haremos visible en el mapa de Google para que sus clientes potenciales puedan encontrarlo fácilmente. /n/n Es fundamental que su empresa aparezca en el mapa de Google para que sus clientes estrella puedan encontrarlo fácilmente. /n/n ¡Aqui estamos para ayudarte!",
        image: "/img/addons/addon-clickmaps.png",
        slug: "click-maps",
        reviews: "83",
        list: [
            { title: "Aparezca en el mapa", description: "Hoy en dia el 70% de las busquedas se hacen a travez de Google Maps." },
            { title: "Optimizacion SEO", description: "Titulo, descripcion y keywords SEO optimizadas." },
            { title: "Sea facil de encontrar", description: "Hubiquese entre los primeros cuando se realize una busqueda." },
        ],
        price: "Free",
        monthly: false

    },
    {
        title: "Page Content Writing",
        description: "Expertos en SEO y Copywriting escribirán el contenido de las paginas nuevas que quiera agregar de su sitio web para que pueda obtener más clientes potenciales y ventas. /n/n El contenido es el rey. Es lo que hace que su sitio web sea visible en Google y lo que convierte a sus visitantes en clientes potenciales. /n/n ¡Aqui estamos para ayudarte!",
        image: "/img/addons/addon-page-content.png",
        slug: "page-content-writing",
        reviews: "72",
        list: [
            { title: "Posicionamiento de palabras clave", description: "" },
            { title: "Captura de clientes potenciales", description: "" },
            { title: "Sitio web mas visible", description: "" },
        ],
        price: "$50/page",
        monthly: false

    },
    {
        title: "Blog Assist Writing",
        description: "Expertos en SEO y Copywriting escribirán blogs para su sitio web para que pueda obtener más clientes potenciales y ventas. /n/n El contenido es el rey. Es lo que hace que su sitio web sea visible en Google y lo que convierte a sus visitantes en clientes potenciales. /n/n ¡Aqui estamos para ayudarte!",
        image: "/img/addons/addon-blog-assist.png",
        slug: "blog-assist-writing",
        reviews: "93",
        list: [
            { title: "Posicionamiento de palabras clave", description: "" },
            { title: "Captura de clientes potenciales", description: "" },
            { title: "Sitio web mas visible", description: "" },
        ],
        price: "$30/article",
        monthly: false

    },
    {
        title: "ADA Protect",
        description: "¡Una empresa inclusiva! Hacemos que su sitio web sea accesible para personas con discapacidades visuales y auditivas. /n/n ¡Aqui estamos para ayudarte!",
        image: "/img/addons/addon-ada-protect.png",
        slug: "ada-protect",
        reviews: "52",
        list: [
            { title: "Empresa inclusiva", description: "Su web sera accesible para personas con discapacidades." },
            { title: "Reputacion", description: "Su empresa sera bien vista a los ojos de los demas." },
            { title: "Instalacion personalizada", description: "El diseño del addon sera adaptado a los colores de su marca!" },
        ],
        price: "$10",
        monthly: true

    },
    {
        title: "Custom Forms",
        description: "Agregue formularios personalizados de cualquier tipo a su sitio web para capturar clientes potenciales. /n/n ¡Aqui estamos para ayudarte!",
        image: "/img/addons/addon-custom-forms.png",
        slug: "custom-forms",
        reviews: "63",
        list: [
            { title: "Instalacion personalizada", description: "El diseño del addon sera adaptado a los colores de su marca!" },
            { title: "Mayor eficiencia", description: "Los formularios haran el proceso de venta mas eficiente." },
            { title: "El cielo es el limite", description: "Podemos realizar cualquier tipo de formulario." },
        ],
        price: "A partir de $25",
        monthly: false

    },
    {
        title: "Hyperlocal Website",
        description: "Posiciona tu sitio web en los primeros lugares de idiomas especificos para que tus clientes puedan encontrarte fácilmente. /n/n ¡Aqui estamos para ayudarte!",
        image: "/img/addons/addon-hyperlocal-website.png",
        slug: "hyperlocal-website",
        reviews: "73",
        list: [
            { title: "Mas ventas", description: "Cierre mas ventas al ser visible en mas paises." },
            { title: "Rompe fronteras", description: "Rompa las barreras que pueda ocacionar el idioma." },
            { title: "Mas precensia en linea", description: "Sea visible en los buscadores de todo el mundo." },
        ],
        price: "$99/idioma",
        monthly: false

    },
    {
        title: "RSS To Mailchimp",
        description: "Conecte su sitio web con Mailchimp para que pueda enviar correos electrónicos a sus clientes potenciales. /n/n ¡Aqui estamos para ayudarte!",
        image: "/img/addons/addon-rrs-mailchimp.png",
        slug: "rss-to-mailchimp",
        reviews: "23",
        list: [
            { title: "Correos electronicos automaticos", description: "" },
            { title: "Captura de clientes potenciales", description: "" },
            { title: "Estrategia de marketing", description: "" },
        ],
        price: "$20",
        monthly: true

    },
    {
        title: "Make Reservations",
        description: "Organiza reuniones directamente desde tu sitio web con Calendly ¡No más correos electrónicos de ida y vuelta! /n/n ¡Aqui estamos para ayudarte!",
        image: "/img/addons/addon-make-reservations.png",
        slug: "make-reservations",
        reviews: "56",
        list: [
            { title: "Citas con un click", description: "Los clientes potenciales pueden agendar citas facilmente desde la web." },
            { title: "Mejora la eficiencia", description: "Reduce los tiempos y la friccion en conversaciones" },
            { title: "Facil de usar", description: "Es pan comido! te lo explicaremos a detalle." },
        ],
        price: "Precio a acordar",
        monthly: false

    },
    {
        title: "Social Management",
        description: "Chat en vivo, respuestas automaticas y mucho mas con nuestro servicio de social management. /n/n ¡Aqui estamos para ayudarte!",
        image: "/img/addons/addon-social-management.png",
        slug: "social-management",
        reviews: "63",
        list: [
            { title: "Chat bot de preferencia", description: "Hay varios planes y presupuestos que se amoldan a las necesidades de tu empresa." },
            { title: "Responde de manera automatica", description: "Puede asignar preguntas o palabras claves con respuestas predeterminadas." },
            { title: "Mejora la eficiencia", description: "Es un bot que responde solo a las consultas, asi que no tendras que preocuparte por nada."},
        ],
        price: "Precio a acordar",
        monthly: false

    },
    {
        title: "Instagram Feed",
        description: "Muestre su feed de Instagram en su sitio web para que sus clientes puedan ver sus últimas publicaciones. /n/n ¡Aqui estamos para ayudarte!",
        image: "/img/addons/addon-instagram.png",
        slug: "instagram-feed",
        reviews: "24",
        list: [
            { title: "Facil instalacion", description: "Tendra su feed lista rapidamente!" },
            { title: "Marketing", description: "El poner la feed es una buena estrategia de marketing." },
        ],
        price: "Free",
        monthly: false

    },
    {
        title: "Facebook Live Chat",
        description: "Hable con sus clientes potenciales en tiempo real con nuestro servicio de chat en vivo de Facebook. /n/n ¡Aqui estamos para ayudarte!",
        image: "/img/addons/addon-facebook.png",
        slug: "facebook-live-chat",
        reviews: "12",
        list: [
            { title: "Facil instalacion", description: "Tendra su chat listo rapidamente!" },
            { title: "Marketing", description: "El poner un chat desde la web es una buena estrategia de marketing." },
        ],
        price: "Free",
        monthly: false

    },
    {
        title: "ShowReviews",
        description: "Muestre las reseñas de Google en su sitio web para generar confianza en sus clientes potenciales. /n/n ¡Aqui estamos para ayudarte!",
        image: "/img/addons/addon-reviews.png",
        slug: "showreviews",
        reviews: "39",
        list: [
            { title: "Buena estrategia de marketing", description: "" },
            { title: "Genera confianza", description: "" },
        ],
        price: "Free",
        monthly: false

    },
    {
        title: "More Addons",
        description: "¿Necesitas algo más? ¡Contáctanos! Podemos hacer cualquier cosa que necesites para tu sitio web empresarial. /n/n ¡Aqui estamos para ayudarte!",
        image: "/img/addons/addon-plus.png",
        slug: "more-addons",
        reviews: "123",
        list: [
        ],
        price: "Hablemos!",
        monthly: false

    },
]