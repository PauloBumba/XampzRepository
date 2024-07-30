// Array de depoimentos para o ID 1
const testimonials_id_1 = [
    {
        img: "https://i.pravatar.cc/150?img=1",
        quote: "A plataforma Zampz é incrível! Facilitou muito a organização dos nossos jogos universitários.",
        author: "Ana Silva"
    },
    {
        img: "https://i.pravatar.cc/150?img=2",
        quote: "Adorei a interface e a facilidade de uso. Recomendo para todos os organizadores de torneios.",
        author: "Carlos Pereira"
    },
    {
        img: "https://i.pravatar.cc/150?img=3",
        quote: "Excelente suporte e muitas funcionalidades úteis. Nossa equipe está muito satisfeita.",
        author: "Mariana Rocha"
    }
];

// Array de depoimentos para o ID 2
const testimonials_id_2 = [
    {
        img: "https://i.pravatar.cc/150?img=4",
        quote: "A Zampz revolucionou a forma como organizamos nossos campeonatos. É uma ferramenta essencial.",
        author: "Lucas Fernandes"
    },
    {
        img: "https://i.pravatar.cc/150?img=5",
        quote: "Muito fácil de usar e com muitos recursos úteis. A Zampz é a melhor plataforma que já utilizamos.",
        author: "Julia Souza"
    },
    {
        img: "https://i.pravatar.cc/150?img=6",
        quote: "Organizar torneios nunca foi tão fácil. A Zampz tem tudo o que precisamos e mais.",
        author: "Fernando Lima"
    }
];

let currentTestimonialIndex1 = 0;
let currentTestimonialIndex2 = 0;

function updateTestimonials() {
    // Atualiza o conteúdo do elemento com id="1"
    const testimonial1 = testimonials_id_1[currentTestimonialIndex1];
    $('#1 .feedback-avatar').attr('src', testimonial1.img);
    $('#1 .feedback-text').text(testimonial1.quote);
    $('#1 .feedback-author').text(testimonial1.author);

    // Atualiza o conteúdo do elemento com id="2"
    const testimonial2 = testimonials_id_2[currentTestimonialIndex2];
    $('#2 .feedback-avatar').attr('src', testimonial2.img);
    $('#2 .feedback-text').text(testimonial2.quote);
    $('#2 .feedback-author').text(testimonial2.author);

    // Atualiza os índices para os próximos depoimentos
    currentTestimonialIndex1 = (currentTestimonialIndex1 + 1) % testimonials_id_1.length;
    currentTestimonialIndex2 = (currentTestimonialIndex2 + 1) % testimonials_id_2.length;
}

// Inicializa a exibição dos depoimentos e define o intervalo de 5 segundos
$(document).ready(function() {
    updateTestimonials();
    setInterval(updateTestimonials, 5000);
});
