import Row from "../Row/Row";
import requests from "../../../utils/requests";

const RowList = () => {
  return (
    <>
      <Row
        title="Tranding"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} />

      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={true}
      />

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={true}
      />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Tv Show" fetchUrl={requests.fetchTvShow} isLargeRow={true} />
    </>
  );
};

export default RowList;
