import i18next from "../../../i18n";
import { getProduct } from '../../../../src/api';
import '../../productdetail/productDetail.sass';
import AdviceBanner from '../../../components/AdviceBanner/AdviceBanner'
import Reviews from "../../../components/Reviews/Reviews";
import { ReviewsForm } from "../../../app/ReviewsForm/ReviewsForm";

const page = async ({ params }) => {
  const data = await getProduct(params)
  const selectedProductId = data.id;

  return (
    <section className="productDtl">
      <section>
        <div className="container-xxl">
          <div className="d-flex productDetail">
            {data ? (
              <div className="row productPic mb-4">
                <div className="col-lg-6 col-10 d-flex gap-2">
                  <div className="col-lg-3 row">
                    <div className="imgContainerPrd">
                      <img src={data.image} alt="" className="w-100" />
                    </div>
                    <div className="imgContainerPrd">
                      <img src={data.image} alt="" className="w-100" />
                    </div>
                    <div className="imgContainerPrd">
                      <img src={data.image} alt="" className="w-100" />
                    </div>
                  </div>
                  <div className="col-lg-8 col-10 biggerImg">
                    <img src={data.image} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col-lg-6 col-10">
                  <div className="ps-md-4 ps-xl-5">
                    <a className="d-none d-md-flex align-items-center gap-2 text-decoration-none mb-3" href="#reviews">
                      <div className="d-flex gap-1 fs-sm">
                        <i className="ci-star-filled text-warning"></i>
                        <i className="ci-star-filled text-warning"></i>
                        <i className="ci-star-filled text-warning"></i>
                        <i className="ci-star-filled text-warning"></i>
                        <i className="ci-star text-body-tertiary opacity-75"></i>
                      </div>
                    </a>
                    <h1 className="h3">{data.name}</h1>
                    <div className="text-warning mb-2">
                      <small>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </small>
                      <span className="ratingShw small">{data.rating}</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <span className="price">${data.price}</span>
                      <span className="discountPrice">$24</span>
                      <span className="badge rounded-pill">-45%</span>
                    </div>
                    <p className="fs-sm mb-2">{data.description}</p>
                    {/* burası colors */}
                    <div className="d-flex mb-2 gap-3">
                    <div className="form-label fw-semibold mb-0">{i18next.t('colors')}</div>
                    {Array.isArray(data.colors) ? (
                      data.colors.map((color, index) => (
                        <div class="form-check" key={index}>
                            <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                            <label className="form-check-label" for="flexRadioDefault2">
                              {color}
                            </label>
                          </div>
                      ))
                    ) : (
                      <p>{data.colors}</p>
                    )}
                    </div>
                 
                    <div className="mb-2">
                      <div className="d-flex mb-1 gap-3">
                        <div className="form-label fw-semibold mb-0">{i18next.t('size')}</div>
                        {data.sizes.map((size, index) => (
                          <div class="form-check" key={index}>
                            <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                              {size}
                            </label>
                          </div>
                        ))}
                      </div>
                      <div className="form-label fw-semibold mb-0">
                        Stok: {data.stok}
                      </div>
                    </div>
                    <div className="d-flex flex-wrap gap-3 pb-3 pb-lg-4 mb-3">
                      <div className="count-input flex-shrink-0">
                        <button typeof="button" className="btn btn-icon btn-lg" data-decrement="" aria-label="Decrement quantity" disabled="">
                          <i className="ci-minus"></i>
                        </button>
                        <input typeof="number" className="form-control form-control-lg" min="1" value="1" readonly="" />
                        <button typeof="button" className="btn btn-icon btn-lg" data-increment="" aria-label="Increment quantity">
                          <i className="ci-plus"></i>
                        </button>
                      </div>
                      <button typeof="button" className="btn addBtn">{i18next.t('addtocart')}</button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              !error && <p>Loading...</p>
            )}
          </div>
        </div>
      </section>
      <section className="reviewsSCTN">
        <Reviews productId={selectedProductId}></Reviews>
        <ReviewsForm productId={selectedProductId}></ReviewsForm>
      </section>
      <section>
        <AdviceBanner></AdviceBanner>
      </section>
    </section>
  )
}

export default page