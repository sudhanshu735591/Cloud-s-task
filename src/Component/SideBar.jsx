import "./SideBar.css";

function SideBar(props) {
  const { handleCheckBox, handleDescending, handleAscending } = props;
  return (
    <div className="parentBox">
      <div className="filterBox">
        <h4>Filter by Rating</h4>

        <div className="checkbox">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input type="checkbox" id="1" value={1} onChange={handleCheckBox} />
            <p className="star">★☆☆☆☆</p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input type="checkbox" value={2} id="2" onChange={handleCheckBox} />
            <p className="star">★★☆☆☆</p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input type="checkbox" id="3" value={3} onChange={handleCheckBox} />
            <p className="star">★★★☆☆</p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input type="checkbox" id="4" value={4} onChange={handleCheckBox} />
            <p className="star">★★★★☆</p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input type="checkbox" id="5" value={5} onChange={handleCheckBox} />
            <p className="star">★★★★★</p>
          </div>
        </div>

        <div>
          <h4>Sort By Year</h4>
          <div>
            <div className="radioBox" onChange={handleAscending}>
              <input type="radio" name="sortOrder" id="ascending" />
              <label htmlFor="ascending">Ascending</label>
            </div>

            <div className="radioBox" onChange={handleDescending}>
              <input type="radio" name="sortOrder" id="descending" />
              <label htmlFor="descending">Descending</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
