class Api::TyresController < Api::BaseController
  def index
    respond_with Tyre.all.order(created_at: :desc)
  end

  def create
    respond_with :api, Tyre.create(tyre_params)
  end

  def destroy
    respond_with Tyre.destroy(params[:id])
  end

  def update
    tyre = Tyre.find(params['id'])
    tyre.update_attributes(tyre_params)
    respond_with tyre, json: tyre
  end

  private

  def tyre_params
    params.require(:tyre).permit(:id, :type, :passenger_qty, :motorcycle_qty,
                                 :agricultural_qty, :aircraft_qty,
                                 :light_truck_qty, :truck_qty, :otr_qty,
                                 :fourxfour_qty, :bale_qty,
                                 :shred_weight, :scrap_weight)
  end
end
