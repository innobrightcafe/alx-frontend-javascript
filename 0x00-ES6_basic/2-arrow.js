export default function getNeighborhoodsList() {
  const neighborhoodList = {
    sanFranciscoNeighborhoods: ["SOMA", "Union Square"],

    addNeighborhood: (newNeighborhood) => {
      neighborhoodList.sanFranciscoNeighborhoods.push(newNeighborhood);
      return neighborhoodList.sanFranciscoNeighborhoods;
    },
  };
  return neighborhoodList;
}
