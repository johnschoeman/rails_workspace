module MessagesHelper

  def markdown_helper(text)
    Kramdown::Document.new(text, input: 'GFM').to_html
  end
end
