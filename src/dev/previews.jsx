import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {Comment} from "../components/Comment.jsx";
import {Avatar} from "../components/Avatar.jsx";
import {Sidebar} from "../components/Sidebar.jsx";

const ComponentPreviews = () => {
  return (
      <Previews palette={<PaletteTree/>}>
        <ComponentPreview path="/Comment">
          <Comment/>
        </ComponentPreview>
        <ComponentPreview path="/Avatar">
          <Avatar/>
        </ComponentPreview>
        <ComponentPreview path="/Sidebar">
          <Sidebar/>
        </ComponentPreview>
      </Previews>
  )
}

export default ComponentPreviews