
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
        description: "Expertos en SEO y Copywriting escribirán el contenido de su sitio web para que pueda obtener más clientes potenciales y ventas.",
        image: "/img/addons/addon-page-content.png",
        slug: "page-content-writing",
        reviews: "23",
        list: [
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
        ],
        price: 99,
        monthly: false

    },
    {
        title: "Blog Assist Writing",
        description: "Expertos en SEO y Copywriting escribirán blogs para su sitio web para que pueda obtener más clientes potenciales y ventas.",
        image: "/img/addons/addon-blog-assist.png",
        slug: "blog-assist-writing",
        reviews: "23",
        list: [
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
        ],
        price: 99,
        monthly: false

    },
    {
        title: "ADA Protect",
        description: "¡Una empresa inclusiva! Hacemos que su sitio web sea accesible para personas con discapacidades visuales y auditivas.",
        image: "/img/addons/addon-ada-protect.png",
        slug: "ada-protect",
        reviews: "23",
        list: [
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
        ],
        price: 99,
        monthly: false

    },
    {
        title: "Custom Forms",
        description: "Agregue formularios personalizados de cualquier tipo a su sitio web para capturar clientes potenciales.",
        image: "/img/addons/addon-custom-forms.png",
        slug: "custom-forms",
        reviews: "23",
        list: [
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
        ],
        price: 99,
        monthly: false

    },
    {
        title: "Hyperlocal Website",
        description: "Posiciona tu sitio web en los primeros lugares de idiomas especificos para que tus clientes puedan encontrarte fácilmente.",
        image: "/img/addons/addon-hyperlocal-website.png",
        slug: "hyperlocal-website",
        reviews: "23",
        list: [
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
        ],
        price: 99,
        monthly: false

    },
    {
        title: "RSS To Mailchimp",
        description: "Conecte su sitio web con Mailchimp para que pueda enviar correos electrónicos a sus clientes potenciales.",
        image: "/img/addons/addon-rrs-mailchimp.png",
        slug: "rss-to-mailchimp",
        reviews: "23",
        list: [
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
        ],
        price: 99,
        monthly: false

    },
    {
        title: "Make Reservations",
        description: "Organiza reuniones directamente desde tu sitio web con Calendly ¡No más correos electrónicos de ida y vuelta!",
        image: "/img/addons/addon-make-reservations.png",
        slug: "make-reservations",
        reviews: "23",
        list: [
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
        ],
        price: 99,
        monthly: false

    },
    {
        title: "Social Management",
        description: "Chat en vivo, respuestas automaticas y mucho mas con nuestro servicio de social management.",
        image: "/img/addons/addon-social-management.png",
        slug: "social-management",
        reviews: "23",
        list: [
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
        ],
        price: 99,
        monthly: false

    },
    {
        title: "Instagram Feed",
        description: "Muestre su feed de Instagram en su sitio web para que sus clientes puedan ver sus últimas publicaciones.",
        image: "/img/addons/addon-instagram.png",
        slug: "instagram-feed",
        reviews: "23",
        list: [
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
        ],
        price: 99,
        monthly: false

    },
    {
        title: "Facebook Live Chat",
        description: "Hable con sus clientes potenciales en tiempo real con nuestro servicio de chat en vivo de Facebook.",
        image: "/img/addons/addon-facebook.png",
        slug: "facebook-live-chat",
        reviews: "23",
        list: [
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
        ],
        price: 99,
        monthly: false

    },
    {
        title: "ShowReviews",
        description: "Muestre las reseñas de Google en su sitio web para generar confianza en sus clientes potenciales.",
        image: "/img/addons/addon-reviews.png",
        slug: "showreviews",
        reviews: "23",
        list: [
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
        ],
        price: 99,
        monthly: false

    },
    {
        title: "More Addons",
        description: "¿Necesitas algo más? ¡Contáctanos! Podemos hacer cualquier cosa que necesites para tu sitio web empresarial.",
        image: "/img/addons/addon-plus.png",
        slug: "more-addons",
        reviews: "23",
        list: [
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
            { title: "Sitio web ultra rápido", description: "check" },
        ],
        price: 99,
        monthly: false

    },
]