import "./index.scss";
import CardList from "../../components/sponsorship/Cards";

export default function Page() {
  return (
    <div className="sponsorPage">
      <section className="headerSection">
        <h3>
          Become a Basable Sponsor: Empower the Future of Software Development
        </h3>
        <p>
          Kindly support our mission to make data management, visualization and
          deployment accessible to all. Your sponsorship fuels innovation,
          bringing powerful tools to businesses and communities worldwide.
        </p>
      </section>
      <CardList />
    </div>
  );
}
