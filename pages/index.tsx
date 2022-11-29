export default function Home() {
  return (
    <>
        <header id="header" className="header">
            <nav className="navbar">
                <div className="navbar-info">
                    <div className="navbar-info_logo">
                        <a href="#">
                            <svg viewBox="0 0 182 49" xmlns="http://www.w3.org/2000/svg" version="1.1" role="img">
                                <title>メルカリ</title>
                                <defs>
                                    {/* <style>
                                        .cls-1 {fill: none}
                                        .cls-2 {fill: #ff0211;fill-rule: evenodd}
                                        .cls-3 {fill: var(--component-mercari-logo-text-color)}
                                        .cls-4 {fill: #4dc9ff}
                                        .cls-5 {fill: #fff}
                                    </style> */}
                                </defs>
                                <g id="mercari-logo">
                                    <rect className="cls-1" width="182" height="49"></rect>
                                    <path className="cls-2" d="M42.65,14.15l0,21a3.55,3.55,0,0,1-2,3.17l-17.8,8.59a3.54,3.54,0,0,1-3.08,0L9.25,41.82,2,38.27A3.51,3.51,0,0,1,0,35.1l0-21a3.5,3.5,0,0,1,2-3.14L19.79,2.07a3.55,3.55,0,0,1,3.16,0L40.71,11A3.53,3.53,0,0,1,42.65,14.15Z"></path>
                                    <rect className="cls-3" x="177.42" y="17.11" width="4.35" height="18.64"></rect>
                                    <path className="cls-3" d="M130.76,32.16c-3.66,0-5.8-2.27-5.8-5.45s1.65-5.72,5.5-5.72a13.13,13.13,0,0,1,5.73,1.37V18.29a15,15,0,0,0-5.81-1.19c-5.92,0-9.69,4.08-9.69,9.61s4.11,9.19,10,9.19a15.89,15.89,0,0,0,5.92-1.18v-4A15,15,0,0,1,130.76,32.16Z"></path>
                                    <path className="cls-3" d="M74,17.11A7,7,0,0,0,68.14,20a7.39,7.39,0,0,0-6-2.89c-4.74,0-8,3.58-8,8.33V35.75h4.29V25c0-2.28,1.38-4,3.72-4A3.76,3.76,0,0,1,66,25V35.75h4.21V25A3.7,3.7,0,0,1,74,21a3.79,3.79,0,0,1,3.91,4V35.75h4.29V25.44A8,8,0,0,0,74,17.11Z"></path>
                                    <circle className="cls-3" cx="179.59" cy="12.66" r="2.41"></circle>
                                    <path className="cls-3" d="M149.47,17.11A9.12,9.12,0,0,0,140,26.49c0,5.52,3.73,9.38,9.06,9.38a5.84,5.84,0,0,0,5.41-3.16v3h4.28V26.49C158.76,20.8,155.17,17.11,149.47,17.11Zm0,15c-3.15,0-5.11-2.15-5.11-5.62,0-3.2,2.2-5.61,5.11-5.61,3.1,0,5,2.2,5,5.61C154.44,29.21,152.74,32.11,149.43,32.11Z"></path>
                                    <path className="cls-3" d="M116.31,21c-2.35,0-3.73,1.95-3.73,4.54V35.75h-4.29V25.44c0-4.75,3.27-8.33,8-8.33h1.55V21Z"></path>
                                    <path className="cls-3" d="M171.45,21c-2.35,0-3.73,1.95-3.73,4.54V35.75h-4.29V25.44c0-4.75,3.27-8.33,8-8.33H173V21Z"></path>
                                    <path className="cls-3" d="M95.46,17.1a9.16,9.16,0,0,0-9.24,9.43c0,5.86,4.2,9.34,10,9.34A20.69,20.69,0,0,0,103,34.68V30.92a20.17,20.17,0,0,1-6.58,1.41C93.2,32.33,91,30.9,90.54,28h13a15.14,15.14,0,0,0,.13-2.07A8.54,8.54,0,0,0,95.46,17.1Zm-4.88,7.54a4.76,4.76,0,0,1,9.39,0Z"></path>
                                    <circle className="cls-4" cx="36.03" cy="14.65" r="9.56"></circle>
                                    <path className="cls-5" d="M5.87,32.15,4,31.23V25.7c0-1.62.91-3.24,2.79-3.05a4.75,4.75,0,0,1,3.54,2.75,2.4,2.4,0,0,1,2.13-.6c1,.13,4.59,1.48,4.59,6.39V37.7l-2.05-1V30.58a3.25,3.25,0,0,0-2.57-3.44c-.61-.06-1.14.43-1.15,1.48s0,6.21,0,6.21L9.4,33.91V28.12c0-2.55-1.65-3.34-2.37-3.42-.41,0-1.16.21-1.16,1.52Z"></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div className="navbar-info_search">
                        <input type="search" placeholder="なにをお探しですか？" />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className="navbar-list">
                    <ul>
                        <li><a href="#">お知らせ</a></li>
                        <li><a href="#">ログイン</a></li>
                        <li><a href="#">会員登録</a></li>
                        <li><a className="btn" href="#">出品</a></li>
                    </ul>
                </div>
            </nav>
            <main>
                {/* <div className="container">
                    <div className="categories">
                        <ul>
                            <li><a className="active" href="#">おすすめ</a></li>
                            <li><a href="#">マイリスト</a></li>
                            <li><a href="#">ピックアップ</a></li>
                        </ul>
                    </div>
                </div> */}
                <div className="underline"></div>
            </main>
        </header>
      <main>
        <p>
          KUKOREMLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p><p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
          ullam esse natus, sapiente porro vero numquam minima harum maiores
          reprehenderit voluptatum praesentium consequuntur voluptate dolores
          fuga quas? Eum, totam?
        </p>
        ：
      </main>
    </>
  );
}
