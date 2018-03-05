var React=require('react');
var {Link}=require('react-router');

var Example= (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Evanston'>Evanston, IL, USA</Link>
        </li>
        <li>
          <Link to='/?location=Beijing'>Beijing, China</Link>
        </li>
      </ol>
  </div>

  );
};

module.exports=Example;
