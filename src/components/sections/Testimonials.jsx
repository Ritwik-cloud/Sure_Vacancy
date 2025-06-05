import React, { memo, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Testimonials section component with dark mode support
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Roma Rai',
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjVQvWy6_Zso7iCAYE6q_qnsxWSlntKE53goxDvDQsf85FQjPJDw=w157-h157-p-rp-mo-br100',
      content: "I highly recommend Sure Vacancy for anyone looking to kickstart their career in Siliguri. They provide genuine job opportunities and offer excellent service. The recruiters are highly professional and take the time to match your skills and strengths with the right job. I'm so glad to have connected with this organization!",
      rating: 5
    },
     {
      id: 2,
      name: 'Praveen Dalmia',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocJPRQFJYmPRd8E88WGJuX0SIIfAqyA0W5YvyrOfSxgi9ChwFg=w75-h75-p-rp-mo-br100',
      content: " I had a requirement for store staff Mr. Pratik had sent me 2 candidates for my store after understanding my requirement.And one of the candidate was perfect for my store.Very humble behavior of the owner ,And even after a month he called me up to check if the staff is doing his duty properly, Will definately refer further.Keep it up , Thank you so much",
      rating: 5
    },

      {
      id: 3,
      name: 'Tushar Ag',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocKuTiBcuGxquoCVj5os37y6Jpna9KcMhMCGh1Ajm4o3Lg6Hug=w90-h90-p-rp-mo-br100',
      content: "I was looking for a decent Accountant job profile and i assure everyone to choose Sure Vacancy as they are best to find you your worthy jobs.Thank you Pratik Ji for the same.",
      rating: 5
    },

      {
      id: 4,
      name: 'Smriti Pradhan',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocJxUlKe17F-cndn5N16AoZ5iXlNe3CJI5B5LNh4TSrIIESifw=w90-h90-p-rp-mo-br100',
      content: "I have got a very good job from this placement company.Thank you SureVacancy.",
      rating: 5
    },

      {
      id: 5,
      name: 'Aman Jaiswal',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocIHQf4Mlm4h7K0eTOW-8f61DO_juKPE8cviZrkbRLme0FaoRg=w90-h90-p-rp-mo-br100',
      content: "i have got the reference of the company from my friend as I was looking for job for a very long time but couldn't find the job of my type and I reached to them and told about my preference about the job they help me finding a job of my preference",
      rating: 5
    },
  ];

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Hear from professionals who transformed their careers with our guidance
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Left: User image, name, position, rating */}
                      <div className="md:w-1/3 flex flex-col items-center text-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-emerald-100 dark:border-emerald-900"
                        />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                        {/* <p className="text-emerald-600 dark:text-emerald-400 text-sm mb-3">{testimonial.position}</p> */}
                        {/* Star rating */}
                        <div className="flex items-center mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 
                                ${i < testimonial.rating
                                  ? 'text-yellow-400 dark:text-yellow-300'
                                  : 'text-gray-300 dark:text-gray-600'
                                }`}
                              fill="currentColor"
                            />
                          ))}
                        </div>
                      </div>
                      {/* Right: Testimonial content with quote icon */}
                      <div className="md:w-2/3">
                        <div className="relative">
                          {/* Decorative SVG quote icon */}
                          <svg className="absolute -top-4 -left-4 h-10 w-10 text-emerald-200 dark:text-emerald-700 opacity-50"
                            fill="currentColor" viewBox="0 0 32 32">
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <p className="text-gray-600 dark:text-gray-200 text-lg leading-relaxed relative z-10">
                            {testimonial.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Previous button */}
          <button
            onClick={goToPrev}
            className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-200" />
          </button>

          {/* Next button */}
          <button
            onClick={goToNext}
            className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-200" />
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mx-1 w-3 h-3 rounded-full focus:outline-none transition-colors ${
                index === currentIndex
                  ? 'bg-emerald-600 dark:bg-emerald-400'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);
