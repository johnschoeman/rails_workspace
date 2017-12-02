class Api::BenchesController < ApplicationController
  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render :show
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def index
    puts filter_params
    if filter_params
      @benches = Bench.in_bounds(filter_params[:bounds])
      if filter_params[:min_seating] && filter_params[:max_seating]
        @benches = @benches.where(num_seats: filter_params[:min_seating]..filter_params[:max_seating])
      end
      @benches
    else
      @benches = Bench.all
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :num_seats)
  end
  
  def filter_params
    params.require(:filter)
          .permit(:min_seating, 
                  :max_seating, 
                  bounds: [northEast: [:lat, :lng], 
                           southWest: [:lat, :lng]])
  end
end
