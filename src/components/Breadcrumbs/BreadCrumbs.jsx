
const BreadCrumbs = () => {
  return (
    <div>
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/">Home</a></li>
      <li className="breadcrumb-item"><a href="/"></a></li>
      <li className="breadcrumb-item active" aria-current="page">page</li>
    </ol>
  </nav>
  </div>
  )
}

export default BreadCrumbs