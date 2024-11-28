// Testimonial data (we’ll add this using JavaScript)
const testimonials = [
    { text: "Apple’s products are amazing! It makes my work life so much easier!", name: "Sarah Thompson", image: "img1.jpeg" },
    { text: "I love the seamless integration between my iPhone, iPad, and MacBook.", name: "Micheal Ramsey", image: "img2.jpeg" },
    { text: "Apple provides the best customer support. I'm always impressed!", name: "Emily Davis", image: "img3.jpeg" },
    { text: "The innovation and quality of Apple’s products are second to none.", name: "James Williams", image: "img6.jpeg" },
    { text: "My productivity has skyrocketed since switching to Apple. Highly recommended!", name: "Olivia Brown", image: "img4.jpeg" },
    { text: "I can't imagine my life without my Apple products. They're so reliable.", name: "Michael Johnson", image: "img7.jpeg" },
    { text: "Apple makes everything simple and beautiful. I love using their products.", name: "Isabella Moore", image: "img5.jpeg" },
    { text: "The performance and design of Apple’s products are always top-notch.", name: "Liam Garcia", image: "img8.jpeg" },
];

// Select the testimonial container
const slider = document.querySelector('.testimonial-slider');

// Add the testimonials to the slider dynamically
testimonials.forEach(testimonial => {
    const div = document.createElement('div');
    div.classList.add('testimonial');

    // Create and add the image
    const img = document.createElement('img');
    img.src = testimonial.image;
    img.alt = testimonial.name;
    div.appendChild(img);

    // Create and add the quote text
    const quote = document.createElement('p');
    quote.classList.add('quote');
    quote.textContent = `"${testimonial.text}"`;
    div.appendChild(quote);

    // Create and add the name
    const name = document.createElement('h4');
    name.classList.add('name');
    name.textContent = testimonial.name;
    div.appendChild(name);

    // Append the testimonial to the slider
    slider.appendChild(div);
});

// Function to show testimonials automatically
let currentIndex = 0;
const allTestimonials = document.querySelectorAll('.testimonial');

function showNextTestimonial() {
    // Hide all testimonials
    allTestimonials.forEach((testimonial, index) => {
        testimonial.style.display = 'none';
    });

    // Show the next testimonial
    currentIndex = (currentIndex + 1) % allTestimonials.length;
    allTestimonials[currentIndex].style.display = 'block';
}

// Show the first testimonial initially
showNextTestimonial();

// Change testimonials every 3 seconds
setInterval(showNextTestimonial, 3000);
