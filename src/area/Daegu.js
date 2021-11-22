import React from "react";

function Daegu({ fill, onClick, onMouseOver, onMouseLeave }) {
  return (
    <polyline
      id="대구"
      className="area"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      strokeMiterlimit="1"
      points="391.942,639.532 392.904,639.724   393.476,639.724 394.626,639.34 394.821,639.148 395.009,638.766 395.204,638.19 395.392,637.615 395.775,637.04 395.775,636.849   396.158,636.466 396.354,636.082 396.354,636.082 396.542,635.891 396.737,635.508 396.925,635.508 397.121,635.315   397.309,634.933 397.121,632.441 397.121,632.441 396.737,632.058 396.354,631.675 395.588,631.291 394.821,630.908   394.626,630.716 394.438,630.716 394.242,630.524 393.859,630.333 393.671,630.142 393.476,629.949 393.093,629.566   392.904,629.375 392.709,629.183 392.521,628.991 392.326,628.8 391.942,628.225 391.56,627.842 390.988,627.458 390.793,627.267   390.604,627.075 390.222,626.5 389.838,625.925 389.643,625.542 389.071,624.775 389.071,624.584 388.876,624.009 388.493,622.858   388.493,622.667 388.305,622.092 388.305,620.559 388.493,619.792 388.688,619.601 389.26,619.218 389.26,619.218 390.222,619.218   390.604,619.409 390.988,619.601 391.56,619.792 393.093,620.367 395.392,620.751 396.158,621.134 397.309,621.518 398.075,621.709   400.375,621.9 401.142,621.325 401.337,621.134 401.524,620.751 401.72,620.751 402.104,620.367 402.291,620.176 402.486,619.984   402.675,619.601 402.486,615.576 402.291,615.001 402.104,614.618 401.142,614.043 400.758,613.854 400.375,613.66 400.188,613.472   399.991,613.276 399.804,613.089 397.888,612.322 397.691,612.322 397.309,612.127 396.925,611.938 396.542,611.556 395.971,611.36   395.588,611.172 395.204,610.789 394.821,610.405 394.821,610.022 394.626,609.827 394.242,609.061 394.055,608.104 394.055,607.91   394.242,607.144 394.438,606.761 394.626,606.761 394.821,606.377 395.009,606.189 395.392,605.61 395.588,605.423 395.971,604.656   396.158,604.461 396.737,603.123 396.925,602.739 397.121,601.973 397.309,601.396 397.504,600.628 397.691,600.439   397.888,599.861 398.271,599.478 398.458,599.29 398.653,599.095 398.842,598.907 399.225,598.328 399.608,597.944 399.804,597.757   399.804,597.562 402.486,597.374 405.17,597.374 407.47,597.374 408.619,597.374 409.003,597.178 409.77,596.411 410.341,595.646   410.341,595.457 410.341,594.112 410.152,593.924 409.19,592.774 409.19,592.774 408.808,592.195 408.041,591.624 407.853,591.624   407.657,591.241 407.086,590.857 407.086,590.666 406.319,590.282 404.591,589.708 404.02,589.516 403.058,589.324 400.375,588.366   398.458,588.558 396.354,588.749 394.055,587.408 394.055,587.024 393.859,585.3 394.055,584.342 394.242,583.767 394.438,583.384   394.626,583.191 394.821,582.425 395.588,581.658 396.158,581.084 396.354,580.892 399.608,573.418 400.188,573.226 400.375,572.46   400.57,571.885 401.72,571.501 402.486,571.31 402.87,571.118 403.824,570.543 404.403,570.543 405.741,569.01 406.124,569.394   406.319,569.585 407.47,569.776 409.19,570.543 409.19,572.269 409.003,572.46 407.47,576.101 407.657,576.292 407.853,576.676   407.853,576.868 407.853,577.06 408.424,578.4 408.619,578.592 409.003,578.784 409.386,578.784 409.957,578.4 410.152,578.592   410.724,578.976 411.874,578.4 412.069,578.592 412.836,579.934 413.604,580.7 414.174,580.317 414.369,580.125 414.369,578.976   420.306,561.728 420.877,562.494 421.072,562.878 421.456,564.027 422.027,564.606 422.41,564.411 423.943,562.306 425.672,561.156   427.205,561.156 427.589,561.156 431.038,559.239 436.209,554.444 439.087,554.444 439.471,554.444 446.175,552.911   447.137,552.911 447.137,553.106 447.708,553.679 448.286,553.679 449.241,554.062 449.624,554.062 450.391,554.257   450.586,554.257 450.97,554.257 451.354,554.444 451.736,554.64 453.27,558.856 454.036,559.812 455.373,561.345 455.757,562.306   455.186,569.01 454.605,570.735 457.673,573.802 457.868,573.993 458.057,574.376 458.439,575.335 458.252,578.209 458.439,578.784   458.635,579.358 459.02,580.317 458.635,580.892 458.635,582.425 458.823,584.15 458.252,584.533 457.673,584.725 455.569,587.024   454.99,587.6 454.419,587.408 454.036,587.408 452.886,586.258 452.69,587.217 452.503,587.408 452.69,587.791 450.774,591.813   450.203,592.391 448.286,599.673 446.558,600.244 445.408,601.206 447.137,606.377 447.324,607.144 447.52,610.21 447.52,610.789   446.753,611.938 447.137,612.127 446.753,613.66 446.175,614.043 445.986,614.238 441.191,616.343 441.004,616.726 440.809,616.918   439.658,617.685 439.275,618.259 439.087,618.451 438.509,618.643 437.554,618.643 435.255,619.218 434.488,618.451   434.104,615.576 433.525,614.043 433.722,613.854 433.525,611.938 431.422,612.322 430.076,612.894 427.776,612.127   427.589,612.127 426.822,612.51 422.794,615.001 422.027,615.576 419.539,617.109 419.344,618.451 419.539,618.834 419.729,619.984   419.729,620.751 419.923,621.134 419.923,621.325 420.11,621.709 418.39,624.2 417.811,624.584 417.436,624.775 415.902,625.733   415.706,628.033 415.706,628.416 415.706,628.608 415.902,629.949 416.285,632.249 414.94,633.399 414.557,633.399 413.604,633.591   411.303,633.782 411.107,633.399 410.919,633.208 409.957,633.399 409.77,633.399 409.574,633.591 409.19,633.975 408.236,633.782   408.041,633.591 407.657,633.208 407.657,633.208 406.703,633.782 406.124,633.782 404.403,634.357 404.208,634.549   403.824,634.933 403.637,635.124 403.058,636.082 402.675,636.657 401.72,636.849 399.225,638.382 398.271,638.766 396.354,638.766   395.204,639.532 394.242,640.106 393.859,640.49 393.476,640.295 393.093,640.49 392.709,640.295 392.138,639.911 "
      transform="translate(106.95522,19.462687)"
      style={{
        fill: fill === undefined ? "#cdcccc" : fill,
        fillOpacity: 1,
        stroke: "white",
        strokeMiterlimit: "1",
      }}
    />
  );
}

export default Daegu;
