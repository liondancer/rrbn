require 'rails_helper'

RSpec.describe "properties/new", type: :view do
  before(:each) do
    assign(:property, Property.new(
      user_id: 1,
      description: "MyText"
    ))
  end

  it "renders new property form" do
    render

    assert_select "form[action=?][method=?]", properties_path, "post" do

      assert_select "input[name=?]", "property[user_id]"

      assert_select "textarea[name=?]", "property[description]"
    end
  end
end
