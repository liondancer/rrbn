require 'rails_helper'

RSpec.describe "properties/index", type: :view do
  before(:each) do
    assign(:properties, [
      Property.create!(
        user_id: 2,
        description: "MyText"
      ),
      Property.create!(
        user_id: 2,
        description: "MyText"
      )
    ])
  end

  it "renders a list of properties" do
    render
    assert_select "tr>td", text: 2.to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
  end
end
