import "./card.css";

export default function Card(props) {
    const { title, content, imageUrl } = props;
    return (
      <>
        <div className="card">
          {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
          <div className="card-content">
            <h2 className="card-title text-xl text-white font-bold font-sans">{title}</h2>
            {/* <p className="card-text text-lg text-white italic">{content}</p> */}
          </div>
        </div>
      </>
    );
  }