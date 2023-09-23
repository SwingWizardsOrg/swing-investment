


import ReactPlayer from 'react-player/youtube'

const Video = () => {
  return (
 <div className=' hover:shadow-xl group-hover:underline border border-2-b'>
  <ReactPlayer url='https://www.youtube.com/watch?v=0a2lv4IwZFY' />
 </div>
  );
};

export default Video;