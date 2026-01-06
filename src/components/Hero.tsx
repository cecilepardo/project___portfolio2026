import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Ce H1 disparaîtra sur mobile grâce au CSS ci-dessus */}
      <h1>Cécile Pardo</h1> 
      
      {/* Le H2 (métier) restera visible comme tu le souhaitais */}
      <h2>Développeuse Web / Designer</h2>
    </section>
  );
};
export default Hero;