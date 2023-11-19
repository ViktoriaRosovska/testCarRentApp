import rentCarImg from "../../assets/image/rentcar.jpg";
import { HomeImg, HomeTitle, Paragraph } from "./HomePage.styled";
export default function HomePage() {
  return (
    <>
      <HomeImg src={rentCarImg} />
      <div>
        <Paragraph>
          While many travelers prefer to rely on public transportation to get around, renting a car offers many benefits
          that simply aren’t available with other modes of transport. Depending on what you want to get out of your next
          trip abroad, there are many reasons why choosing to rent a car on vacation might be the best decision for you.
        </Paragraph>
        <HomeTitle>RENT A CAR FOR SPEED AND EASE</HomeTitle>
        <Paragraph>
          When vacationing abroad, whether solo or with the family, we have a limited amount of time to experience a
          near-limitless number of sights and activities and often end up cutting things we really want to do out of our
          itineraries. If you <a href="tel:+380730000000"> rent a car when traveling </a>, however, you will have the
          time and convenience needed to get the most out of your adventures. With public transportation, you lose a
          great deal of time planning, organizing, waiting in line and making stops along the way to your different
          destinations. Not to mention that public transport can often be unpredictable. Renting a vehicle lets you
          travel at your own leisure and get to the spots you want to visit quickly and hassle-free. The freedom this
          brings will allow you to make the most of your travels without all the added stress of having to find your way
          around.
        </Paragraph>
        <HomeTitle>RENT A CAR FOR ON-THE-FLY EXPLORATION</HomeTitle>
        <Paragraph>
          When exploring a new country, it can sometimes be fun to explore outside of the common tourist-trap areas. Car
          rental services often include a GPS system, providing you with the perfect opportunity for exploration off the
          beaten track without getting lost. Exploring smaller villages can give you a unique perspective of the country
          you’re visiting that you might not find if you stay in the most popular areas. Don’t hesitate
          <a href="tel:+380730000000"> to rent a car on your next vacation</a> and spend a day discovering the little
          treasures that surround the typical tourist spots.
        </Paragraph>
        <HomeTitle>RENT A CAR TO SAVE MONEY AS A GROUP </HomeTitle>
        <Paragraph>
          Solo travelers understandably have less financial apprehension with using public transportation on vacation.
          Families and groups, on the other hand, can quickly rack up a hefty bill using taxis and buses. Renting a car
          is usually the more economical choice when traveling in a group. And yes, it’s generally cost-efficient, even
          with car rental insurance and gas factored into the equation. Moreover, traveling with small children on
          public transit can sometimes be a headache and make your vacation more stressful. If you want to get more
          specific and find out why to rent a car in Costa Rica or learn more about our services, don’t hesitate{" "}
          <a href="tel:+380730000000"> to contact us today</a>.
        </Paragraph>
      </div>
    </>
  );
}
