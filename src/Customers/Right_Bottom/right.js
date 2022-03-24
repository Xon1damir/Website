import React from "react";
import Map from "./map";
class Right extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Right">
        <div className="Right-Header">
          <h1 className="Header-Text-1">Доставка</h1>
          <div className="Header-Left">
            <h1 className="Header-Text-2">
              Растояние:<span className="Header-Number-1">10.4 км</span>
            </h1>
          </div>
        </div>
        <div className="Image-Top">
          <div className="Right-Bottom">
            <div className="Bottom-Container-1">
              <div className="Image-Top-Box-1">
                <h1 className="Bottom-Text-1">Тип доставки</h1>
                <select
                  value={this.props.select_delivery}
                  placeholder="Тип доставки"
                  className="Right-Select-1"
                  onChange={(e) =>
                    this.props.handleChangeSelect_Delivery(e.target.value)
                  }
                >
                  {this.props.delivery_type.map((delivery_) => (
                    <option value={delivery_.value}>{delivery_.label}</option>
                  ))}
                </select>
              </div>
              <div className="Image-Top-Box-2">
                <h1 className="Bottom-Text-2">Тариф</h1>
                <select
                  value={this.props.select_branch}
                  className="Right-Select-2"
                  onChange={(e) =>
                    this.props.handleChangeSelect_Branch(e.target.value)
                  }
                >
                  {this.props.branch_type.map((branch_) => (
                    <option value={branch_.value}>{branch_.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="Bottom-Container-2">
              <h1 className="Bottom-Text-3">Адрес</h1>
              <input
                value={this.props.address}
                className="Bottom-Input-3"
                onChange={this.props.handleChangeAddress}
                placeholder="Адрес или обьект"
              />
            </div>
          </div>
        </div>
        <Map />
        <div>
          <div className="Bottom-Container-3">
            <h1 className="Bottom-Text-3">Филиал</h1>
            <input
              value={this.props.branch}
              className="Bottom-Input-3"
              onChange={this.props.handleChangeBranch}
              placeholder="Филиал"
            />
          </div>
          <div className="Bottom-Container-1">
            <div className="Image-Top-Box-1">
              <h1 className="Bottom-Text-1">Дом</h1>
              <input
                value={this.props.home}
                className="Bottom-Input-1"
                onChange={this.props.handleChangeHome}
                placeholder="Дом"
              />
            </div>
            <div className="Image-Top-Box-2">
              <h1 className="Bottom-Text-2">Квартира</h1>
              <input
                value={this.props.apartment}
                className="Bottom-Input-2"
                onChange={this.props.handleChangeApartment}
                placeholder="Квартира"
              />
            </div>
          </div>
          <div className="Bottom-Container-4">
            <h1 className="Bottom-Text-3">Этаж</h1>
            <input
              value={this.props.floor}
              className="Bottom-Input-3"
              onChange={this.props.handleChangeFloor}
              placeholder="Этаж"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Right;

// <input
// value={this.props.rating}
// className="Bottom-Input-2"
// onChange={this.props.handleChangeRating}
// placeholder="Тариф"
// />
