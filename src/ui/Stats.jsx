import { useEffect, useRef, useState } from "react";

const Stats = () => {
  const [experience, setExperience] = useState(0);
  const [products, setProducts] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          const duration = 2500;
          const startTime = Date.now();

          
          setExperience(0);
          setProducts(0);
          setSatisfaction(0);

          const animate = () => {
            const elapsed = Date.now() - startTime;

            
            const progress = Math.min(elapsed / duration, 1);

            
            const easeOut = 1 - Math.pow(1 - progress, 3);

            
            setExperience(Math.floor(easeOut * 27));

            
            setProducts(Math.floor(easeOut * 1000000));

           
            setSatisfaction(Number((easeOut * 99.9).toFixed(1)));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      {
        threshold: 0.4,
      },
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className=" bg-sky-500 py-16 mx-5 rounded-2xl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
         
          <div>
            <h2 className="text-5xl font-semibold">
              {experience}
              <span className="text-3xl">+</span>
            </h2>

            <p className="mt-4 text-xl font-semibold">Years of Experience</p>
          </div>

       
          <div>
            <h2 className="text-5xl font-semibold">
              {products.toLocaleString()}
              <span className="text-3xl">+</span>
            </h2>

            <p className="mt-4 text-xl font-semibold">Products Delivered</p>
          </div>

          <div>
            <h2 className="text-5xl font-semibold">
              {satisfaction}
              <span className="text-3xl">%</span>
            </h2>

            <p className="mt-4 text-xl font-semibold">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
