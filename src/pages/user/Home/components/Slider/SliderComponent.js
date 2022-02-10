import { useEffect, useState } from 'react';

const Slider = (props) => {
  const [state, setState] = useState({ isShow: false, text: 'aaaa' });
  console.log('slider rendered');



  useEffect(() => {
  }, []);



  console.log('props: ', props);
  const { data = [] } = props;

  return (
    <>
      {/*<div>
        {state.isShow && <Status />}
        <button onClick={handleClick}>{state.isShow ? 'Hide' : 'Show'}</button>
        <input
          type="text"
          value={state.text}
          // onChange={(event) => setText(event.target.value)}
          onChange={(event) => setState({...state, text: event.target.value})}
        />
      </div>*/}
      <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="autoplay: true">
        <ul className="uk-slideshow-items">
          {
            data.map(slide => (
              <li key={slide.id}>
                <img src={slide.courseImage} alt="" uk-cover="true" />
                <div className="uk-position-bottom uk-position-medium uk-text-center uk-light">
                  <h3 className="uk-margin-remove" uk-slideshow-parallax="x: 100,-100">{slide.title}</h3>
                </div>
              </li>
            ))
          }
        }
        </ul>

        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true"
          uk-slideshow-item="previous" />
        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true"
          uk-slideshow-item="next" />
      </div>
    </>
  );
};

// class Slider extends Component {

// componentDidMount {

//  }
//
//   render() {
//     return (
//       <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="autoplay: true">
//         <ul className="uk-slideshow-items">
//           {
//             this.props.data.map(slide => (
//               <li key={slide.id}>
//                 <img src={slide.image} alt="" uk-cover="true" />
//                 <div className="uk-position-bottom uk-position-medium uk-text-center uk-light">
//                   <h3 className="uk-margin-remove" uk-slideshow-parallax="x: 100,-100">{slide.title}</h3>
//                   <p className="uk-margin-remove" uk-slideshow-parallax="x: 300,-300">{slide.description}</p>
//                 </div>
//               </li>
//             ))
//           }
//           }
//         </ul>
//
//         <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true"
//            uk-slideshow-item="previous"/>
//         <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true"
//            uk-slideshow-item="next"/>
//
//       </div>
//     );
//   }
// }

export { Slider };
