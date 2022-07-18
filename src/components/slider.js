import images from "../images/images"

const Slide = (props) => {
  return (
    <div className="w-[50vw]">
      <img src={props.image} alt="Loading"/>
    </div>
  )
}

const Slider = () => {
  return (
    <div className="flex justify-center h-[80%]">
    <Slide image={images.photo1} />
    </div>
  )
}

export default Slider